package com.lironnick.testeskdv5


import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class HelloKModule(reactContext: ReactApplicationContext?) :
    ReactContextBaseJavaModule(reactContext) {
    // add to CalendarModule.java
    override fun getName(): String {
        return "HelloKotlin"
    }

    @ReactMethod
    fun sayHello(name: String, callback: Callback) {
        try {
            val message = "Hello Galo: $name"
            callback.invoke(null, message)
        } catch (e: Exception) {
            callback.invoke(e, null)
        }
    }
}