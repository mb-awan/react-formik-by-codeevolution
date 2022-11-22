import './Chart.css';
import { ChartBar } from "./ChartBar";

export const Chart = props => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxDataPointsValue = Math.max(...dataPointsValues);

    return (
        <div className="chart">
            {
                props.dataPoints.map(dataPoint =>
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={maxDataPointsValue}
                        label={dataPoint.label}
                    />
                )
            }
        </div>
    )
}