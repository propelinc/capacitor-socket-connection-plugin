import {createPlugin} from './core/index';
import type {ICapacitorSocketConnectionDefinitions} from './definitions';
import type {Plugin} from './core/index';

const pluginName = 'CapacitorSocketConnectionPlugin';

const plugin = createPlugin<ICapacitorSocketConnectionDefinitions & Plugin>(pluginName);

export {plugin as NativePlugin};
