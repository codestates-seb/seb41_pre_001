import React from 'react';
import MDEditor from '@uiw/react-md-editor';

/**
 * Created by @DG
 * @returns <div>
 */
function Editor() {
  const [value, setValue] = React.useState('');
  return (
    <div className="container">
      <MDEditor value={value} onChange={setValue} />
    </div>
  );
}

export default Editor;
