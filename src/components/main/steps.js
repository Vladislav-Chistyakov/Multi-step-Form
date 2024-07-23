import stepInputs from "./Steps/StepInputs.vue";
import stepCheckbox from "./Steps/StepCheckbox.vue";
import stepRadio from "./Steps/StepRadio.vue";
import stepSubmit from "./Steps/StepSubmit.vue";


export const steps = [
    {
        component: stepInputs,
        title: 'Contact details',
        description: 'Lorem ipsum dolor sit amet consectetur adipisc.'
    },
    {
        component: stepCheckbox,
        title: '',
        description: ''
    },
    {
        component: stepRadio,
        title: '',
        description: ''
    },
    {
        component: stepSubmit,
        title: '',
        description: ''
    }
]

export const activeStepComponent = function (index) {
    return steps[index].component
}

export const activeStepTitle = function (index) {
    return steps[index].title
}

export const activeStepDescription = function (index) {
    return steps[index].description
}
