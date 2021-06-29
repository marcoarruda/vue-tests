import { shallowMount } from "@vue/test-utils";

import Users from "@/views/Users.vue";

describe("Users.vue", () => {
  test("Must contain a title 'List of users'", () => {
    const wrapper = shallowMount(Users);
    const title = wrapper.findComponent({ ref: "title" });
    expect(title.exists()).toBe(true);
    expect(title.html()).toContain("List of users");
  });

  test("If there is no user, show only a message about it", () => {
    const wrapper = shallowMount(Users);
    const noUserMsg = wrapper.findComponent({ ref: "noUserMsg" });
    expect(noUserMsg.exists()).toBe(true);
  });

  test("If there are users, do NOT show 'no users' msg", () => {
    const wrapper = shallowMount(Users);
    const noUserMsg = wrapper.findComponent({ ref: "noUserMsg" });
    expect(noUserMsg.exists()).toBe(false);
  });

  test.todo("If there are users, show them");

  test.todo("If there are more than 5 users, show only 5 per page");

  test.todo("Show page links properly after the current page content");
});
