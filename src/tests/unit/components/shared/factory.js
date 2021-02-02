import { shallowMount } from "@vue/test-utils"

export const factory = (component, options) => {
    return shallowMount(component, {
        ...options
    })
}
