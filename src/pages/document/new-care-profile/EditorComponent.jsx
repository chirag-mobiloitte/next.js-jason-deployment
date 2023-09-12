import TinyMCEEditor from 'src/components/TinyMCEEditor';
import React, { useState } from 'react';


const EditorComponent = () => {
  const [content, setContent] = useState('');

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <div>
      <TinyMCEEditor initialValue={content} onChange={handleEditorChange} />
      {/* You can access the content in your component state (content) */}
      <div>
      </div>
    </div>
  );
};

export default EditorComponent;