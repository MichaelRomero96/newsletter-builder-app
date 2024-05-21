import grapesjs, { Editor } from 'grapesjs';
import GjsEditor from '@grapesjs/react';
LucideAArrowUp;
import './styles.css';
import { LucideAArrowUp, SaveIcon } from 'lucide-react';
import setEditorSections from './editorSections';
import { FC, useRef } from 'react';
import IconButton from '../ui/IconButton';
import getDefaultNewTemplate from './defaultNewTemplate';

interface Props {
  html: string;
  saveOutput: () => void;
  editorRef: React.RefObject<Editor | null>;
}

const EmailTemplateEditor: FC<Props> = ({ html, saveOutput, editorRef }) => {
  const onEditor = (editor: Editor) => {
    setEditorSections(editor);
    editorRef.current = editor;

    editor.on('load', () => {
      const defaultTemplate = getDefaultNewTemplate();
      loadOutput(html.length > 0 ? html : defaultTemplate);
    });
  };

  const loadOutput = (styledHtml: string) => {
    if (editorRef.current) {
      const domParser = new DOMParser();
      const doc = domParser.parseFromString(styledHtml, 'text/html');
      const styleElement = doc.querySelector('style');
      const html = doc.body.innerHTML;

      if (styleElement) {
        const css = styleElement.textContent || '';
        editorRef.current.setComponents(html);
        editorRef.current.setStyle(css);
      }
    }
  };

  return (
    <>
      <GjsEditor
        grapesjs={grapesjs}
        grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
        options={{
          storageManager: false,
        }}
        plugins={['gjs-preset-newsletter']}
        onEditor={onEditor}
      ></GjsEditor>
      <div className="flex justify-end z-10 relative -top-16 -left-40">
        <IconButton
          onClick={saveOutput}
          className="bg-blue-500 h-14 w-14 rounded-full hover:bg-blue-400"
          icon={<SaveIcon color="white" />}
        />
      </div>
    </>
  );
};

export default EmailTemplateEditor;
