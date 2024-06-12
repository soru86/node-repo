import {benchmark} from 'thread-pool-manager-wt/benchmark';

benchmark({
  poolSize: 3,
  maxMessages: 100000,
  blockLength:1400,
  delay: 135
});