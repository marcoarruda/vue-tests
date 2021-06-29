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
    const wrapper = shallowMount(Users, {
      data: () => ({
        users: [],
      }),
    });
    const noUserMsg = wrapper.findComponent({ ref: "noUserMsg" });
    expect(noUserMsg.exists()).toBe(true);
  });
  test("If there are users, do NOT show 'no users' msg", () => {
    const wrapper = shallowMount(Users, {
      data: () => ({
        users: [{ name: "Marco" }],
      }),
    });
    const noUserMsg = wrapper.findComponent({ ref: "noUserMsg" });
    expect(noUserMsg.exists()).toBe(false);
  });

  test("If there are users, show them", () => {
    const users = [{ name: "Marco" }, { name: "Renan" }];
    const wrapper = shallowMount(Users, {
      data: () => ({
        users,
      }),
    });
    const usersItem = wrapper.findAllComponents({ name: "UsersListItem" });
    expect(usersItem.length).toBe(users.length);
  });

  test("Show total of users", () => {
    const users = [{ name: "Marco" }, { name: "Renan" }, { name: "Rubens" }];
    const wrapper = shallowMount(Users, {
      data: () => ({
        users,
      }),
    });
    const counter = wrapper.findComponent({ ref: "counter" });
    expect(counter.exists()).toBe(true);
    expect(counter.html()).toContain(users.length);
  });

  test.todo("If there are more than 5 users, show only 5 per page");

  test.todo("Show page links properly after the current page content");
});
