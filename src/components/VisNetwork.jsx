import { useEffect, useRef } from "react"
import { Network } from 'vis-network'
import NavBar from "./NavBar";

const VisNetwork = () => {

    const visJsRef = useRef(null);

    const nodes = [
        { id: 1, label: "Node 1", group: 1 },
        { id: 2, label: "Node 2", group: 3 },
        { id: 3, label: "Node 3", group: 4 },
        { id: 4, label: "Node 4", group: 2 },
        { id: 5, label: "Node 5", group: 1 },
    ];

    const edges = [
        { from: 1, to: 3 },
        { from: 1, to: 2 },
        { from: 2, to: 4 },
        { from: 2, to: 5 },
        { from: 3, to: 3 },
    ];

    const options = {
            edges: {
            smooth: {
                type: 'cubicBezier',
                forceDirection: 'vertical',
                roundness: 0.4
            },
            
        },
        layout: {
            hierarchical: {
                direction: 'UD',
            },
        },
        physics: {
            enabled: true,
        },
        
    }



    useEffect(() => {
        const network =
            visJsRef.current &&
            new Network(visJsRef.current, { nodes, edges }, options);

        // Events
        network.on('click', (params) => {
            console.log('Clicked on node:', params.nodes[0]);
        });

    }, [visJsRef, nodes, edges])

    return (
        <>
            <NavBar />
            <div ref={visJsRef} style={{ height: '500px', width: '800px' }} />
        </>
    )
}

export default VisNetwork
