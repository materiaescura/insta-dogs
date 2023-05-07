import React from 'react'
import { VictoryPie, VictoryChart, VictoryBar } from 'victory'
import styles from './UserStatsGraphs.module.css'


const mapAcessos = data => data
    .map(({acessos}) => acessos)
    .map(Number)
    .reduce((total, acesso) => total + acesso, 0)
    

const mapGraph = data => data
    .map((item) => ({
        x:item.title,
        y: Number(item.acessos)
    }))

const UserStatsGraphs = ({data}) => {
    const [total, setTotal]  = React.useState(0)
    const [graph, setGraph] = React.useState([])


    React.useEffect(() => {
        setTotal(mapAcessos(data))
        setGraph(mapGraph(data))
    },[data])

    console.log(graph)
    return (
        <section className={`${styles.graph} animeLeft`}>
            <div className={`${styles.total} ${styles.graphItem}`}>
                <p>Acessos: {total}</p>
            </div>
            <div className={styles.graphItem}>
                <VictoryPie
                    data={graph}
                    innerRadius={50}
                    padding={{
                        top: 20,
                        bottom: 20,
                        left: 80,
                        right: 80
                    }}
                    style={{
                        data: {
                            fillOpacity: 0.9,
                            stroke: '#fff',
                            strokeWidth: 2
                        },
                        labels: {
                            fontSize: 14,
                            fill: '#333'
                        }
                    }}
                />
            </div>
            <div className={styles.graphItem}>
                <VictoryChart horizontal domainPadding={{ x: 8 }}>
                    <VictoryBar data={graph} />
                </VictoryChart>
            </div>
        </section>
    )
}

export default UserStatsGraphs