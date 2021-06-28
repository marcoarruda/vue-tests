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
  test.skip("If there is no user, show only a message", () => {

  });
  test.skip("If there are users, show 5 users per page", () => {

  });
  test.skip("Show page links after the current page content", () => {

  });
});
