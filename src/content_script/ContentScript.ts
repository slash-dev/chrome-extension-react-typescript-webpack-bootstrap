
import { ContentScriptActionInfo } from './Actions';

export default function executeActions(actions: ContentScriptActionInfo[]) {
  console.log("Execute actions: ", actions);
  for (let i = 0; i < actions.length; ++i) {
    if (actions[i].id === 'some_action_id') {
      alert("Some action has been executed!");
    }
  }
}
