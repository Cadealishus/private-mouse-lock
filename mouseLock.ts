//% color="#6b46c1" icon="\uf245" block="Mouse Lock"
namespace mouseLock {
    let enabled = false
    let installed = false
    let clickToLock = true
    let lastX = -1
    let lastY = -1
    let sensitivity = 1
    let moveHandler: (dx: number, dy: number) => void = null

    function resetPosition() {
        lastX = -1
        lastY = -1
    }

    function install() {
        if (installed) return
        installed = true

        browserEvents.onMouseMove(function (x, y) {
            if (!enabled) {
                lastX = x
                lastY = y
                return
            }

            if (lastX >= 0 && lastY >= 0 && moveHandler) {
                const dx = Math.constrain(x - lastX, -15, 15) * sensitivity
                const dy = Math.constrain(y - lastY, -15, 15) * sensitivity
                moveHandler(dx, dy)
            }

            lastX = x
            lastY = y
        })

        browserEvents.onEvent(browserEvents.Event.PointerLeave, function () {
            resetPosition()
        })

        browserEvents.MouseLeft.addEventListener(browserEvents.MouseButtonEvent.Pressed, function (x, y) {
            if (clickToLock && !enabled) setEnabled(true)
        })
    }

    /** Enable or disable mouse-look capture. */
    //% blockId=mouseLock_setEnabled block="set mouse lock $value"
    //% value.shadow=toggleOnOff
    //% weight=100
    export function setEnabled(value: boolean) {
        install()
        enabled = value
        resetPosition()
        browserEvents.setCursorVisible(!value)
    }

    /** Toggle mouse-look capture. */
    //% blockId=mouseLock_toggle block="toggle mouse lock"
    //% weight=90
    export function toggle() {
        setEnabled(!enabled)
    }

    /** Run code whenever the locked mouse moves. */
    //% blockId=mouseLock_onMove block="on locked mouse move $dx $dy"
    //% draggableParameters="reporter"
    //% weight=80
    export function onMove(handler: (dx: number, dy: number) => void) {
        install()
        moveHandler = handler
    }

    /** Enable mouse lock when the player clicks the simulator. */
    //% blockId=mouseLock_setClickToLock block="click to enable mouse lock $value"
    //% value.shadow=toggleOnOff
    //% weight=70
    export function setClickToLock(value: boolean) {
        install()
        clickToLock = value
    }

    /** Set the multiplier applied to mouse movement. */
    //% blockId=mouseLock_setSensitivity block="set mouse lock sensitivity to $value"
    //% value.defl=1 value.min=0.1 value.max=5
    //% weight=60
    export function setSensitivity(value: number) {
        sensitivity = Math.max(0.1, value)
    }

    /** Check whether mouse lock is enabled. */
    //% blockId=mouseLock_isEnabled block="mouse lock is enabled"
    //% weight=50
    export function isEnabled(): boolean {
        return enabled
    }
}
