# Java + Agent 学习路线与进度

创建日期：2026-10-14 ｜ 最近更新：2026-10-19 ｜ 花花

## 当前学习进度

| 阶段    | 学习内容                  | 状态     | 进度      | 时间规划  |
| ----- | --------------------- | ------ | ------- | ----- |
| 第一阶段  | JavaSE                | 🟠 进行中 | 104/149 | 10.25 |
| 第二阶段  | MySQL                 | 🟣 暂停  | 152/195 |       |
| 第三阶段  | JavaWeb               | 🔵 未开始 | —       |       |
| 第四阶段  | Spring Boot + MyBatis | 🔵 未开始 | —       |       |
| 第五阶段  | 苍穹外卖                  | 🔴 阻塞  | —       |       |
| 第六阶段  | Redis + 黑马点评          | 🔵 未开始 | —       |       |
| 第七阶段  | 消息队列                  | 🔵 未开始 | —       |       |
| 第八阶段  | 并发编程                  | 🔵 未开始 | —       |       |
| 第九阶段  | JVM                   | 🔵 未开始 | —       |       |
| 第十阶段  | Linux + Docker + 部署   | 🔵 未开始 | —       |       |
| 第十一阶段 | Java + Agent          | 🔵 未开始 | —       |       |
| 第十二阶段 | 八股集中复盘 + 项目表达         | 🔵 未开始 | —       |       |
| 穿插学习  | 八股 + 计算机基础            | 🔵 未开始 | —       |       |
| 穿插学习  | LeetCode Hot 100      | 🔵 未开始 | —/100 题 |       |

状态：⚪ 待确认 · 🔵 未开始 · 🟠 进行中 · 🟣 暂停 · 🔴 阻塞 · 🟡 待验收 · 🟢 已完成。



---



##  对原路线的调整

| 调整项                                       | 优先级   | 分析                                      |
| ----------------------------------------- | ----- | --------------------------------------- |
| Git、IDE 调试、Maven                          | 必修    | 开始时接触，项目阶段持续使用；用于管理代码、排查错误与构建项目         |
| Spring、Spring MVC、Spring Boot、MyBatis     | 必修    | 放在苍穹外卖之前；理解依赖注入、请求处理、持久化与事务             |
| HTTP、网络与操作系统基础                            | 必修，穿插 | JavaWeb 学 HTTP，并发阶段学进程线程，部署阶段学端口与网络排障   |
| 测试、日志、异常处理、鉴权                             | 必修，穿插 | 从框架阶段开始；避免项目只能演示正常流程                    |
| Linux、Docker、部署                           | 必修    | 做完项目后部署一次；能定位启动失败和依赖连接失败                |
| 数据结构 + Hot 100                            | 必修，穿插 | Java 集合基础之后开始，每周持续练习，不等所有后端知识学完         |
| 八股与项目复盘                                   | 必修，穿插 | 每学完一个模块整理对应问题，用代码和实验理解结论                |
| 模型调用、RAG、工具调用、Agent 评测                    | 必修    | 补成完整 Agent 主线，最终整合进 Java 项目             |
| Spring Cloud、微服务、Elasticsearch、Kubernetes | 后续选修  | 第一轮先完成可部署的单体项目和 Agent 项目；岗位或项目确有需要再补    |
| Python 与模型训练                              | 按需选修  | Java Agent 应用开发不以完整学习 Python 或训练模型为前置条件 |




##  学习资料索引



| 编号 | 对应内容 | 学习资料 | 建议阅读顺序 / 用途 |
|---|---|---|---|
| R01 | JavaSE | [Dev.java 学习入口](https://dev.java/learn/) | 基础语法、面向对象、集合、IO，按学习章节查阅 |
| R02 | Git | [Pro Git 中文版](https://git-scm.com/book/zh/v2) | 先学仓库、提交、分支、合并与远程仓库；作为补充查阅入口 |
| R03 | Maven | [Maven 入门指南](https://maven.apache.org/guides/getting-started/) | 项目结构、pom、依赖、生命周期；作为补充查阅入口 |
| R04 | JavaSE / MySQL / JavaWeb | [黑马官方 Java 学习路线](https://yun.itheima.com/map?hm=) | 作为中文课程导航，选定一套课程后持续学习，避免反复切换 |
| R05 | MySQL | [MySQL 8.4 官方手册](https://dev.mysql.com/doc/refman/8.4/en/) | 先查 SQL、索引与事务；使用其他版本时切换对应手册 |
| R06 | HTTP / Web 基础 | [MDN HTTP 中文文档](https://developer.mozilla.org/zh-CN/docs/Web/HTTP) | 请求响应、状态码、Cookie、缓存；作为补充查阅入口 |
| R07 | Spring 与项目实践 | [Spring 官方 Guides](https://spring.io/guides/) | 优先 REST 服务、数据访问与 Web 测试相关指南 |
| R08 | MyBatis | [MyBatis 中文入门](https://mybatis.org/mybatis-3/zh_CN/getting-started.html) | 从映射与配置开始，再学动态 SQL 和项目整合 |
| R09 | 苍穹外卖 | [黑马官方课程入口](https://yun.itheima.com/course/1029.html?capid=1) | 按课程业务顺序实现；每个模块结束后脱离视频复现一项功能 |
| R10 | Redis + 黑马点评 | [黑马 Redis 入门到实战课程](https://yun.itheima.com/course/994.html) | 基础命令 → 黑马点评案例 → 缓存与锁相关实验 |
| R11 | Redis | [Redis 官方开发文档](https://redis.io/docs/latest/develop/) | 查数据结构、命令与客户端行为，辅助验证课程实验 |
| R12 | 消息队列 | [RabbitMQ 官方教程](https://www.rabbitmq.com/tutorials) | 选 Java 示例，先消息收发，再工作队列、路由与确认机制 |
| R13 | 并发编程 | [Java 并发包 API（JDK 21）](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/package-summary.html) | 配合线程池、并发集合、异步任务练习；使用其他 JDK 时切换版本 |
| R14 | JVM 诊断 | [Oracle Java 故障排查指南](https://docs.oracle.com/en/java/javase/26/troubleshoot/index.html) | 阅读诊断思路；工具命令与选项须核对所用 JDK 的版本 |
| R15 | 八股 / 并发 / JVM / 基础复盘 | [JavaGuide 作者仓库](https://github.com/Snailclimb/JavaGuide) | 中文复盘索引；先看对应模块，再用官方文档和实验核对关键结论 |
| R16 | Docker 部署 | [Docker Get Started](https://docs.docker.com/get-started/) | 镜像、容器、持久化、网络和多服务运行；作为补充查阅入口 |
| R17 | Java Agent 主线 | [Spring AI 官方参考文档](https://docs.spring.io/spring-ai/reference/) | 模型调用 → 结构化输出 → 检索增强 → 工具调用 → 评测 |
| R18 | Java Agent 备选框架 | [LangChain4j 入门](https://docs.langchain4j.dev/get-started/) / [教程目录](https://docs.langchain4j.dev/category/tutorials/) | 对照了解 Java 模型接入、AI Services 与工具；不必同时学完两个框架 |
| R19 | LeetCode Hot 100 | [力扣热题 100 官方计划](https://leetcode.cn/studyplan/top-100-liked/) | 按题型推进，区分独立完成、看题解后完成和复做通过 |
| R20 | 数据结构与算法基础 | [Hello 算法](https://www.hello-algo.com/) | 先学复杂度、数组、链表、哈希、树，再结合 Java 示例刷题；作为补充查阅入口 |


