import stepInputs from "./Steps/StepInputs.vue";
import stepCheckbox from "./Steps/StepCheckbox.vue";
import stepRadio from "./Steps/StepRadio.vue";
import stepSubmit from "./Steps/StepSubmit.vue";


export const steps = [
    {
        component: stepInputs
    },
    {
        component: stepCheckbox
    },
    {
        component: stepRadio
    },
    {
        component: stepSubmit
    }
]

export const activeStepComponent = function (index) {
    return steps[index].component
}
