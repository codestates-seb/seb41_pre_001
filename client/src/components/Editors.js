import MDEditor, { commands } from '@uiw/react-md-editor';
function Editor() {
  return (
    <div>
      <MDEditor extraCommands={[commands.fullscreen]} />
    </div>
  );
}

export default Editor;
