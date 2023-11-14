import { useState } from 'react'
import Plot from 'react-plotly.js'

export const BarChart = () => {
  const [plotData, setPlotData] = useState([
    {
      x: ['Coluna 1', 'Coluna 2', 'Coluna 3', 'Coluna 4', 'Coluna 5'],
      y: [10, 15, 7, 10, 5],
      type: 'bar',
    }
  ])

  const [plot2Data, setPlot2Data] = useState([
    {
      x: ['Coluna 1', 'Coluna 2', 'Coluna 3', 'Coluna 4', 'Coluna 5'],
      y: [10, 15, 7, 10, 5],
      orientation: 'h',
      type: 'bar',
      
    }
  ])

  const [piePlot, setPiePlot] = useState([
    {
      values: [15, 35, 65],
      labels: ['React', 'Vue', 'Angular'],
      type: 'pie',
    }
  ])

  const [timePlot, setTimePlot] = useState([
    {
      x: ['2021-10-10 22:20:00', '2021-10-16 22:45:00', '2021-12-13 15:30:00'],
      y: [1, 3, 6],
      type: 'scatter'
    }
  ])

  const config = {
    displayModeBar: false,
  }

  return (
    <div>
      <Plot
        data={plotData} // Barras
        layout={{ width: 500, height: 500, title: 'Gráfico de Barras' }}
        config={config}
      />

      <Plot
        data={plot2Data} // Barras
        layout={{ width: 500, height: 500, title: 'Gráfico de Barras' }}
        config={config}
      />

      <Plot
        data={piePlot} // Circular
        layout={{ width: 500, height: 500, title: 'Gráfico circular' }}
        config={config}
      />

      <Plot
        data={timePlot} // Time
        layout={{ width: 700, height: 400, title: 'Gráfico de Linha' }}
        config={config}
      />
    </div>
  )
}