microbitApp.compassButtonDown(CompassButtonOption.W, function () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, microbitApp.getSliderX())
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, microbitApp.getSliderX())
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, microbitApp.getSliderX())
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, microbitApp.getSliderX())
})
microbitApp.compassButtonDown(CompassButtonOption.N, function () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, microbitApp.getSliderX())
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, microbitApp.getSliderX())
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, microbitApp.getSliderX())
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, microbitApp.getSliderX())
})
microbitApp.onButtonReleased(function () {
    motor.motorStopAll()
})
microbitApp.compassButtonDown(CompassButtonOption.S, function () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, microbitApp.getSliderX())
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, microbitApp.getSliderX())
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, microbitApp.getSliderX())
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, microbitApp.getSliderX())
})
microbitApp.compassButtonDown(CompassButtonOption.E, function () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, microbitApp.getSliderX())
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, microbitApp.getSliderX())
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, microbitApp.getSliderX())
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, microbitApp.getSliderX())
})
bluetooth.startUartService()
motor.motorStopAll()
servos.P0.setAngle(90)
basic.forever(function () {
    servos.P0.setAngle(microbitApp.getSliderY())
})
