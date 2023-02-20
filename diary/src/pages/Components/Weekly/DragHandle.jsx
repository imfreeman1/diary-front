import React from "react";
import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";

const DragHandle = () => {
    return (
      <NodeViewWrapper>
        <div
          contentEditable="false"
          draggable="true"
          data-drag-handle
        />
        <NodeViewContent/>
      </NodeViewWrapper>
    );
  };
    
export default DragHandle;