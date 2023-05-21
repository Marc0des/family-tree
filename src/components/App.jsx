import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Node from "./Node";
import CreateArea from "./CreateArea";
import NodeConnection from "./NodeConnection";

function App() {
  const [nodes, setNodes] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  function addNode(newNode) {
    setNodes((prevNodes) => {
      return [...prevNodes, newNode];
    });

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  }

  function deleteNode(id) {
    setNodes((prevNodes) => {
      return prevNodes.filter((nodeItem, index) => {
        return index !== id;
      });
    });
  }

  function updateNode(id, updatedNode) {
    setNodes((prevNodes) => {
      return prevNodes.map((nodeItem, index) => {
        if (index === id) {
          return {
            ...nodeItem,
            name: updatedNode.name,
            content: updatedNode.content,
          };
        }
        return nodeItem;
      });
    });
  }

  function createNodeItem(nodeItem) {
    setNodes((prevNodes) => [...prevNodes, nodeItem]);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNode} />
      {showPopup && <div className="popup-line">New node created!</div>}
      <div className="node-grid">
        {nodes.map((nodeItem, index) => {
          return (
            <React.Fragment key={index}>
              <Node
                id={index}
                name={nodeItem.name}
                content={nodeItem.content}
                onDelete={deleteNode}
                onUpdate={updateNode}
                onAdd={createNodeItem}
                className="node"
              />
              {index > 0 && (
                <NodeConnection
                  startId={index}
                  endId={index - 1}
                  nodeCount={nodes.length}
                  isFirst={index === 1}
                  isSecond={index === 2}
                  isThird={index === 3}
                  isFourth={index === 4}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
