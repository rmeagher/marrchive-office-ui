import Coordinator, { RequestStrategy, SyncStrategy } from '@orbit/coordinator';
import { backup } from './Backups';
import { memory, remote } from './Sources';

const coordinator = new Coordinator({
    sources: [remote, memory, backup]
});

coordinator.addStrategy(
    new RequestStrategy({
        source: 'memory',
        on: 'beforeQuery',

        target: 'remote',
        action: 'query',

        blocking: false
    })
);

coordinator.addStrategy(
    new RequestStrategy({
        source: 'memory',
        on: 'beforeUpdate',

        target: 'remote',
        action: 'update',

        blocking: false
    })
);

coordinator.addStrategy(
    new SyncStrategy({
        source: 'remote',
        target: 'memory',
        blocking: false
    })
);

coordinator.addStrategy(
    new SyncStrategy({
        source: 'memory',
        target: 'backup',
        blocking: true
    })
);

export default coordinator;