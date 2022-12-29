import MDEditor from '@uiw/react-md-editor';

/**
 * Created by @DG
 * @returns <div>
 */
function Editor({ value, setValue }) {
  return (
    <div className="container">
      <MDEditor value={value} onChange={setValue} />
    </div>
  );
}

export default Editor;
