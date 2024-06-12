import { Logger } from '@nestjs/common';
import { safeStringify } from 'src/utils/utils';

export function LogClass(): ClassDecorator {
  return (target: any) => {
    const prototype = target.prototype;
    const methodNames = Object.getOwnPropertyNames(prototype);

    methodNames.forEach((methodName: string) => {
      if (
        methodName !== 'constructor' &&
        typeof prototype[methodName] === 'function'
      ) {
        const originalMethod = prototype[methodName];

        prototype[methodName] = async function (...args: any[]) {
          const methodLogger = new Logger(target.name);
          methodLogger.log(
            `Start executing ${methodName} with arguments: ${safeStringify(args)}`,
          );

          try {
            const result = await originalMethod.apply(this, args);
            methodLogger.log(`Finished executing ${methodName}`);
            return result;
          } catch (error) {
            methodLogger.error(`Error executing ${methodName}: ${error}`);
            throw error;
          }
        };
      }
    });
  };
}
