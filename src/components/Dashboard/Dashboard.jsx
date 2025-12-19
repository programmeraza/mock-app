import React, { useEffect, useState } from "react"
import ReactApexChart from "react-apexcharts"
import ScoreCards from "../ScoreCards/ScoreCards"
import "./Dashboard.scss"
import Feedback from "../Feedback/Feedback"
import Profile from "../Profile/Profile"

const Dashboard = () => {
  const [scores, setScores] = useState(null)
  const [chartData, setChartData] = useState({
    categories: [],
    values: []
  })

  const [options, setOptions] = useState({
    chart: {
      type: "line",
      toolbar: { show: false },
      zoom: { enabled: false }
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#A175F0"]
    },
    markers: {
      size: 6,
      colors: ["#fff"],
      strokeColors: "#A175F0",
      strokeWidth: 3,
      hover: { size: 8 }
    },
    grid: {
      borderColor: "#EDEAF7",
      strokeDashArray: 4
    },
    dataLabels: { enabled: false },
    tooltip: {
      enabled: true,
      custom: ({ series, seriesIndex, dataPointIndex, w }) => {
        const date = w.globals.categoryLabels[dataPointIndex]
        const value = series[seriesIndex][dataPointIndex]
        return `<div class="custom-tooltip"><strong>${date}</strong><br/>${value} band</div>`
      }
    },
    xaxis: {
      categories: [],
      labels: { style: { colors: "#A3A3A3", fontSize: "12px" } }
    },
    yaxis: { show: false }
  })

  // 🔹 Загрузка данных через fetch (работает сейчас)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://example.com/api/dashboard")
        const data = await res.json()

        // ожидаем формат:
        // { scores: {...}, chart: { categories: [], values: [] } }
        setScores(data.scores)
        setChartData(data.chart)

        setOptions(prev => ({
          ...prev,
          xaxis: { categories: data.chart.categories }
        }))
      } catch (err) {
        console.error("Fetch error:", err)
        // fallback временные данные
        const fallbackScores = {
          listening: 6.5,
          reading: 6.0,
          writing: 5.5,
          speaking: 5.5
        }
        const fallbackChart = {
          categories: ["12 MAY", "13 MAY", "14 MAY", "15 MAY", "16 MAY"],
          values: [5.2, 5.6, 5.3, 5.4, 5.5]
        }
        setScores(fallbackScores)
        setChartData(fallbackChart)
        setOptions(prev => ({ ...prev, xaxis: { categories: fallbackChart.categories } }))
      }
    }

    fetchData()
  }, [])

  /*
  // 🔹 В будущем можно включить WebSocket для реального времени
  useEffect(() => {
    const ws = new WebSocket("wss://example.com/ws/dashboard")

    ws.onopen = () => console.log("WebSocket connected")

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        setScores(data.scores)
        setChartData(data.chart)
        setOptions(prev => ({ ...prev, xaxis: { categories: data.chart.categories } }))
      } catch (err) {
        console.error("WebSocket parse error:", err)
      }
    }

    ws.onerror = (err) => console.error("WebSocket error:", err)
    ws.onclose = () => console.log("WebSocket disconnected")

    return () => ws.close()
  }, [])
  */

  if (!scores || !chartData.categories.length) return null

  return (
    <>
      <div className="dashboard">
        <div className="container">
          <div className="dashboard-container">
            <Profile/>
            <div className="dashboard-card">
              <div className="dashboard-header">
                <img src="./time.svg" alt="" />
                <div className="dashboard__header-flex">
                  <span className="label">OVERALL SCORE</span>
                  <h2>Band 5.5 • 12 tests</h2>
                </div>
              </div>

              <div className="dashboard-tabs">
                {["5D", "2W", "1M", "6M", "1Y"].map(tab => (
                  <button key={tab}>{tab}</button>
                ))}
              </div>

              <ReactApexChart
                options={options}
                series={[{ name: "Band", data: chartData.values }]}
                type="line"
                height={260}
              />
            </div>

            <ScoreCards scores={scores} />
            <Feedback />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
