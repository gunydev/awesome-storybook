import MyButton from './Button.vue';

export default {
  title: 'Example/Button',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'select' }, // radio
      options: ['small', 'medium', 'large'],
    },
  },
};

const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<my-button v-bind="args" />',
});

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Primary Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary Button',
}


export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'This is Large Button',
  backgroundColor: "#FFCD00",
}


export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'This is Small Button',
}