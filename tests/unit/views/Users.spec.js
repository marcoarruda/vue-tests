import { shallowMount } from "@vue/test-utils";

import Users from "@/views/Users.vue";

describe("Users.vue", () => {
  test("Must contain a title 'List of users'", () => {
    const wrapper = shallowMount(Users);
    const title = wrapper.findComponent({ ref: "title" });
    expect(title.exists()).toBe(true);
    expect(title.html()).toContain("List of users");
  });
});
