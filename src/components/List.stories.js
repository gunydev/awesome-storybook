import List from './List.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/List',
  component: List,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    lists: {
      type: Array
    },
    fontSize: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    fontColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { List },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<list v-bind="args" />',
});

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Small.args = {
  fontSize: 'small',
  fontColor: 'red'
};

export const Medium = Template.bind({});
Medium.args = {
  fontSize: 'medium'
};

export const Large = Template.bind({});
Large.args = {
  fontSize: 'large'
};
