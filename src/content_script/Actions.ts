export interface ContentScriptActionInfo {
  id: string,
}

export function getSomeAction(): ContentScriptActionInfo {
  return { id: 'some_action_id' };
}