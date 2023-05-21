import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const [node, setNode] = useState({
    name: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNode((prevNode) => {
      return {
        ...prevNode,
        [name]: value
      };
    });
  }

  function submitNode() {
    props.onAdd(node);
    setNode({
      name: "",
      content: ""
    });
  }

  function expand() {
    setExpanded(true);
    setClickCount((prevCount) => prevCount + 1);
  }

  function getPlaceholder() {
    if (clickCount === 0) {
      return "Create a Family Tree";
    } else if (clickCount === 1) {
      return "Birthdate";
    } else if (clickCount > 1 && node.content === "") {
      return "Enter a date...";
    } else {
      return "Create a Family Tree";
    }
  }

  return (
    <form className="create-node">
      {isExpanded && (
        <input
          name="name"
          onChange={handleChange}
          value={node.name}
          placeholder="Name"
        />
      )}

      <input
        type={clickCount > 1 ? "date" : "text"}
        name="content"
        onClick={expand}
        onChange={handleChange}
        value={node.content}
        placeholder={getPlaceholder()}
        rows={isExpanded ? 3 : 1}
      />
      <Zoom in={isExpanded}>
        <Fab onClick={submitNode}>
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
}

export default CreateArea;