import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function Node(props) {
  const [isEditing, setEditing] = useState(false);
  const [editedNode, setEditedNode] = useState({
    name: props.name,
    content: props.content,
    type: ""
  });
  const [addCount, setAddCount] = useState(0);

  useEffect(() => {
    if (props.id === 2) {
      const nodeElement = document.getElementById(`node-${props.id}`);
      nodeElement.style.marginLeft = "184px";
      nodeElement.style.marginTop = "185px";
      nodeElement.style.position = "absolute";
    }
  }, [props.id]);

  useEffect(() => {
    if (props.id === 3) {
      const nodeElement = document.getElementById(`node-${props.id}`);
      nodeElement.style.marginLeft = "620px";
      nodeElement.style.marginTop = "185px";
      nodeElement.style.position = "absolute";
    }
  }, [props.id]);

  useEffect(() => {
    if (props.id === 4) {
      const nodeElement = document.getElementById(`node-${props.id}`);
      nodeElement.style.marginLeft = "1050px";
      nodeElement.style.marginTop = "185px";
      nodeElement.style.position = "absolute";
    }
  }, [props.id]);

  function handleDelete() {
    props.onDelete(props.id);
  }

  function handleEdit() {
    setEditing(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setEditedNode((prevNode) => {
      return {
        ...prevNode,
        [name]: value
      };
    });
  }

  function handleUpdate() {
    props.onUpdate(props.id, editedNode);
    setEditing(false);
  }

  function handleAdd() {
    const newNodeItem = {
      name: "New Node",
      content: "New Node Content",
      type: editedNode.type
    };
    props.onAdd(newNodeItem);
    setAddCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="node" id={`node-${props.id}`}>
      {isEditing ? (
        <div>
          <input
            name="name"
            onChange={handleChange}
            value={editedNode.name}
          />
          <input
            type="date"
            name="content"
            onChange={handleChange}
            value={editedNode.content}
          />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      ) : (
        <div>
          <h1>{props.name}</h1>
          <p>{props.content}</p>
          <button onClick={handleEdit}>
            <EditIcon />
          </button>
          <button onClick={handleDelete}>
            <DeleteIcon />
          </button>
          <div>
            <select
              name="type"
              onChange={handleChange}
              value={editedNode.type}
            >
              <option value="">Family Type</option>
              <option value="mother">Mother</option>
              <option value="father">Father</option>
              <option value="son">Son</option>
              <option value="daughter">Daughter</option>
            </select>
            <button onClick={handleAdd}>Add</button>
          </div>
        </div>
      )}
    </div>
  );
}

Node.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired
};

export default Node;