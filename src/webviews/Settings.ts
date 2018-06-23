import {WebviewController} from './Webview';
import {ExtensionContext} from 'vscode';

export class SettingsWebview extends WebviewController {
  constructor(context: ExtensionContext) {
    super(context);
  }

  get filename(): string {
    return 'settings.html';
  }

  get id(): string {
    return 'materialTheme.settings';
  }

  get title(): string {
    return 'Material Theme Settings';
  }
}
