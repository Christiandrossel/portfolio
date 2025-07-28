import { Component, Input } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-post-code-button',
  templateUrl: './post-code-button.component.html',
})
export class PostCodeButtonComponent {
  @Input() editor!: Editor;

  insertCodeSnippet() {
    if (!this.editor) return;
    const selection = this.editor.view.state.selection;
    const { from, to } = selection;
    const selectedText = this.editor.view.state.doc.textBetween(from, to, ' ');
    let codeHtml = '';
    if (selectedText) {
      codeHtml = `<pre><code class=\"language-typescript\">${selectedText}</code></pre>`;
      this.editor.commands.insertHTML(codeHtml);
    } else {
      codeHtml = '<pre><code class="language-java"></code></pre>';
      this.editor.commands.insertHTML(codeHtml);
      // Cursor hinter "language-java" setzen ist mit ngx-editor nicht direkt möglich,
      // aber der Nutzer kann direkt weiterschreiben.
    }
  }
}
