import type { App } from 'vue'
// 需要安装的指令
import vResize from './resize'
import vPermission from './permission'
import { infoLogger } from '../logger'

export function setupDirectives(app: App) {
  // 全局注册指令
  app.directive('resize', vResize)
  app.directive('permission', vPermission)
  infoLogger('Application use [Directives]')
}

/*
    Vue3中注册指令的方式有如下几种
    Tips：
        1. 只有当所需功能只能通过直接操作DOM来实现时，才应该考虑使用自定义指令
        2. see - https://cn.vuejs.org/guide/reusability/custom-directives.html#usage-on-components
           不推荐在组件上使用自定义指令，当组件具有多个根节点时，会出现预期外的行为
    1. 全局注册：允许你在整个应用中使用该指令
        app.directive(指令名, 指令实现)

    2. 局部注册：允许你在特定的组件中使用该指令
        defineComponent({
            ... // 其他选项式API
            directives: {
                'my-custom': myCustomDirective
            }
        })

    3. 动态注册：允许在运行时注册自定义指令。使用场景，需要在条件判断后才注册加载
        (function registerDynamicDirectives() {
            if (someCondition) { // 条件判断
                // 全局注册的方式
                app.directive('dynamic-custom', dynamicCustomDirective);
            }
        })()

    4. 插件注册：允许在应用初始化时注册自定义指令，可复用的插件集合。
        // directives-plugin.ts
        export default {
            install(app) {
                app.directive('my-custom', myCustomDirective);
            }
        };
        // main.ts
        import directivesPlugin from './directives-plugin';
        app.use(directivePlugin);

    5. 在组合API中使用useDirectives辅助函数
        import { useDirectives } from 'vue-use'; // 使用第三方库vue-use
            export default {
            setup() {
                useDirectives({
                'my-custom': myCustomDirective,
                });
            },
            template: `
                <div v-my-custom>
                Content
                </div>
            `,
        };
*/
