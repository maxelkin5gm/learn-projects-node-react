export class LogUtility {

    static info(message: string) {
        console.log('\x1b[36m%s\x1b[0m', '[INFO] ' + message)
    }

    static infoError(err: any = null) {
        console.log()
        console.log('\x1b[35m%s\x1b[0m', '[INFO-ERROR]--------------------------------------[INFO-ERROR]');
        console.log('\x1b[35m%s\x1b[0m', err || "Error");
        console.log('\x1b[35m%s\x1b[0m', '[INFO-ERROR]--------------------------------------[INFO-ERROR]');
        console.log()
    }

    static error(err: any = null) {
        console.log()
        console.log('\x1b[31m%s\x1b[0m', '[ERROR]--------------------------------------[ERROR]');
        console.log('\x1b[31m%s\x1b[0m', err || "Error");
        console.log('\x1b[31m%s\x1b[0m', '[ERROR]--------------------------------------[ERROR]');
        console.log()
    }
}