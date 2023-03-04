import * as vscode from 'vscode';

export function codenavType(args: any) {
  const { text } = args;
  switch (text) {
    case 'i':
      vscode.commands.executeCommand('toggleVim');
      break;
    case 'f':
      vscode.commands.executeCommand('workbench.action.navigateForward');
      break;
    case 'd':
      vscode.commands.executeCommand('workbench.action.navigateBack');
      break;
    case 's':
      vscode.commands.executeCommand('editor.action.goToDeclaration');
      break;
    case 'a':
      vscode.commands.executeCommand('editor.action.goToImplementation');
      break;
    case 'r':
      if (
        vscode.window.activeTextEditor?.document &&
        vscode.languages.match(
          ['javascript', 'typescript'],
          vscode.window.activeTextEditor.document
        ) === 10
      ) {
        vscode.commands.executeCommand('typescript.goToSourceDefinition');
      }
      break;
    case 'h':
      vscode.commands.executeCommand('cursorLeft');
      break;
    case 'j':
      vscode.commands.executeCommand('cursorDown');
      break;
    case 'k':
      vscode.commands.executeCommand('cursorUp');
      break;
    case 'l':
      vscode.commands.executeCommand('cursorRight');
      break;
    case ' ':
      vscode.commands.executeCommand('cursorRight');
      break;
    case '\n':
      vscode.commands.executeCommand('cursorDown');
      break;
    default:
      break;
  }
}
