import { shallowMount, Wrapper } from '@vue/test-utils';

import PostCard from '@/components/cards/PostCard.vue';
import { Post } from '@/interfaces/posts';

describe('PostCard.vue', () => {
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    wrapper = shallowMount(PostCard, {
      propsData: {
        cover: '',
        title: '',
        description: '',
      },
    });
  });

  it('Should render title and body from post', async () => {
    const mockPost: Pick<Post, 'title' | 'body'> = {
      title: 'my dummy title',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse risus mauris, tincidunt sollicitudin tempor in, tincidunt eu ante. Phasellus erat nisl, varius at odio at,',
    };

    await wrapper.setProps({
      title: mockPost.title,
      description: mockPost.body,
    });

    expect(wrapper.text()).toMatch(mockPost.title);
    expect(wrapper.text()).toMatch(mockPost.body);
  });
});
