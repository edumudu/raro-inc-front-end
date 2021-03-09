import { shallowMount, Wrapper } from '@vue/test-utils';

import VInput from '@/components/form/VInput.vue';

describe('VButton.vue', () => {
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    wrapper = shallowMount(VInput, {
      propsData: { label: 'dummy label' },
    });
  });

  it('Should put value passed to `value` prop in input', async () => {
    const value = 'dummy text';
    const inputEl = wrapper.getComponent({ ref: 'input' }).element as HTMLInputElement;

    await wrapper.setProps({ value });
    expect(inputEl.value).toBe(value);
  });

  it('Should call input listeners when type in input', async () => {
    const value = 'dummy text';
    const inputWrapper = wrapper.getComponent({ ref: 'input' });

    (inputWrapper.element as HTMLInputElement).value = value;
    await inputWrapper.trigger('input');

    expect(wrapper.emitted('input')).toHaveLength(1);
    expect(wrapper.emitted('input')).toMatchObject([[value]]);
  });

  it('Should pass important attributes to input', async () => {
    const inputWrapper = wrapper.getComponent({ ref: 'input' });
    const props = {
      name: 'name',
      type: 'password',
    };

    await wrapper.setProps(props);
    expect(inputWrapper.attributes()).toMatchObject(props);
  });
});
