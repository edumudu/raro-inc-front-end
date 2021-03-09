import { shallowMount, Wrapper } from '@vue/test-utils';

import VButton from '@/components/form/VButton.vue';

describe('VButton.vue', () => {
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    wrapper = shallowMount(VButton);
  });

  it('Should render value passed in slot', () => {
    const slotText = 'Slot dummy text';

    wrapper = shallowMount(VButton, {
      slots: { default: slotText },
    });

    expect(wrapper.text()).toMatch(slotText);
  });

  it('Should render a button when `tag` prop not is passed', async () => {
    await wrapper.setProps({ tag: undefined });
    expect(wrapper.element.tagName).toBe('BUTTON');
  });

  it('Should render tag passed by `tag` prop', async () => {
    await wrapper.setProps({ tag: 'a' });
    expect(wrapper.element.tagName).toBe('A');

    await wrapper.setProps({ tag: 'button' });
    expect(wrapper.element.tagName).toBe('BUTTON');
  });

  it('Should render a rounded style when `rounded` prop be true', async () => {
    await wrapper.setProps({ rounded: true });

    expect(wrapper.classes('rounded')).toBeTruthy();
  });

  it('Should add `small` class to button', async () => {
    await wrapper.setProps({ size: 'small' });

    expect(wrapper.classes('small')).toBeTruthy();
  });

  it('Should add `large` class to button', async () => {
    await wrapper.setProps({ size: 'large' });

    expect(wrapper.classes('large')).toBeTruthy();
  });

  it('Should permit inherit attributes', async () => {
    const props = {
      type: 'text',
      name: 'button-name',
      form: '#form-id',
    };

    await wrapper.setProps(props);
    expect(wrapper.attributes()).toMatchObject(props);
  });

  it('Should be able to listen events from button', async () => {
    const onClick = jest.fn();
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const onMouseover = jest.fn();

    wrapper = shallowMount(VButton, {
      listeners: {
        click: onClick,
        focus: onFocus,
        blur: onBlur,
        mouseover: onMouseover,
      },
    });

    await wrapper.trigger('click');
    expect(onClick).toBeCalledTimes(1);

    await wrapper.trigger('focus');
    expect(onClick).toBeCalledTimes(1);

    await wrapper.trigger('blur');
    expect(onClick).toBeCalledTimes(1);

    await wrapper.trigger('mouseover');
    expect(onClick).toBeCalledTimes(1);
  });

  it('Should not call onClick when disabled', async () => {
    const onClick = jest.fn();

    wrapper = shallowMount(VButton, {
      listeners: { click: onClick },
      propsData: { disabled: true },
    });

    await wrapper.trigger('click');
    expect(onClick).not.toBeCalled();
  });
});
