import { shallowMount } from "@vue/test-utils";
import Users from "@/views/Users.vue";

describe("Users.vue", () => {
  // it("renders props.msg when passed", () => {
  //   const msg = "new message";
  //   const wrapper = shallowMount(Users, {
  //     propsData: { msg },
  //   });
  //   expect(wrapper.text()).toMatch(msg);
  // });
  test("Must contain a title 'List of users'", () => {
    const wrapper = shallowMount(Users);
    const title = wrapper.findComponent({ ref: "title" });
    expect(title.exists()).toBe(true);
    expect(title.html()).toContain("List of users");
  });
  test("If there is no user, show only a message", () => {
    const wrapper = shallowMount(Users);
    const noUserMsg = wrapper.findComponent({ ref: "noUserMsg" });
    expect(noUserMsg.exists()).toBe(true);
  });
  test("If there are users, show them", () => {
    const wrapper = shallowMount(Users, {
      data: () => ({
        users: [{}, {}, {}],
      }),
    });
    const users = wrapper.findAllComponents({ name: "UsersListItem" });
    expect(users.length).toBe(3);
  });
  test("If there are more than 5 users, show only 5 per page", () => {
    const wrapper = shallowMount(Users, {
      data: () => ({
        users: [{}, {}, {}, {}, {}, {}],
      }),
    });
    const users = wrapper.findAllComponents({ name: "UsersListItem" });
    expect(users.length).toBe(5);
  });
  test("Show page links after the current page content", () => {
    const wrapper = shallowMount(Users, {
      data: () => ({
        users: [{}, {}, {}, {}, {}, {}],
      }),
    });
    const pagination = wrapper.findComponent({ ref: "pagination" });
    expect(pagination.exists()).toBe(true);
    const paginationLinks = pagination.findAll("a");
    const pagesCount = Math.floor(wrapper.vm.users.length / 5);
    expect(paginationLinks.length).toBe(pagesCount);
  });
});
