import * as vscode from 'vscode';

import {IThemeCustomSettings} from './../interfaces/itheme-custom-properties';

/**
 * Gets custom settings
 */
export function getCustomSettings(): IThemeCustomSettings {
  return vscode.workspace.getConfiguration().get<IThemeCustomSettings>('materialTheme', {});
}

/**
 * Sets a custom property in custom settings
 */
export function setCustomSetting(settingName: string, value: any): Thenable<string> {
  return vscode.workspace.getConfiguration().update(`materialTheme.${settingName}`, value, true).then(() => settingName);
}

/**
 * Updates accent name
 */
export function updateAccent(accentName: string): Thenable<string> {
    return setCustomSetting('accent', accentName);
}
