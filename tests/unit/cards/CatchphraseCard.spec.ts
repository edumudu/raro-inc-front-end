import { shallowMount, Wrapper } from '@vue/test-utils';

import CatchphraseCard from '@/components/cards/CatchphraseCard.vue';

describe('PostCard.vue', () => {
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    wrapper = shallowMount(CatchphraseCard, {
      propsData: {
        title: '',
        description: '',
      },
    });
  });

  it('Should render title and description from post', async () => {
    const mockPost = {
      title: 'my dummy title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse risus mauris, tincidunt sollicitudin tempor in, tincidunt eu ante. Phasellus erat nisl, varius at odio at,',
    };

    await wrapper.setProps({
      title: mockPost.title,
      description: mockPost.description,
    });

    expect(wrapper.text()).toMatch(mockPost.title);
    expect(wrapper.text()).toMatch(mockPost.description);
  });
});
