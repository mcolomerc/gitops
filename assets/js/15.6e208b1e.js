(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{419:function(e,t,a){"use strict";a.r(t);var s=a(56),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"an-operating-model-for-building-cloud-native-applications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#an-operating-model-for-building-cloud-native-applications"}},[e._v("#")]),e._v(" An operating model for building cloud native applications")]),e._v(" "),a("p",[e._v("GitOps works by using Git as a single source of truth for declarative infrastructure and applications.")]),e._v(" "),a("ImgCard",{attrs:{url:"https://images.contentstack.io/v3/assets/blt300387d93dabf50e/bltccdc2969d11fa365/5b7afd0d1739fa520bbbb0bd/git-diagram.png",width:"800"}}),e._v(" "),a("p",[e._v("With GitOps, the use of software agents can alert on any divergence between Git with what's running in a cluster, and if there's a difference, Kubernetes reconcilers automatically update or rollback the cluster depending on the case.")]),e._v(" "),a("p",[e._v("With Git at the center of your delivery pipelines, developers use familiar tools to make pull requests to accelerate and simplify both application deployments and operations tasks to Kubernetes.")]),e._v(" "),a("h2",{attrs:{id:"principles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#principles"}},[e._v("#")]),e._v(" Principles")]),e._v(" "),a("h3",{attrs:{id:"the-entire-system-described-declaratively"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-entire-system-described-declaratively"}},[e._v("#")]),e._v(" The entire system described declaratively.")]),e._v(" "),a("p",[e._v("Declarative means that configuration is guaranteed by a set of facts instead of by a set of instructions.")]),e._v(" "),a("p",[e._v("With your application’s declarations versioned in Git, you have a "),a("strong",[e._v("single source of truth.")])]),e._v(" "),a("h3",{attrs:{id:"the-canonical-desired-system-state-versioned-in-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-canonical-desired-system-state-versioned-in-git"}},[e._v("#")]),e._v(" The canonical desired system state versioned in Git.")]),e._v(" "),a("p",[e._v("Use a "),a("code",[e._v("Git revert")]),e._v(" to go back to your previous application state.")]),e._v(" "),a("h3",{attrs:{id:"approved-changes-that-can-be-automatically-applied-to-the-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#approved-changes-that-can-be-automatically-applied-to-the-system"}},[e._v("#")]),e._v(" Approved changes that can be automatically applied to the system.")]),e._v(" "),a("p",[e._v("With GitOps, there is a segregated environment of which the state definition lives outside. This allows you to separate what you do and how you're going to do it.\nSoftware agents to ensure correctness and alert on divergence.")]),e._v(" "),a("h3",{attrs:{id:"software-agents-can-inform-you-whenever-reality-doesn-t-match-your-expectations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#software-agents-can-inform-you-whenever-reality-doesn-t-match-your-expectations"}},[e._v("#")]),e._v(" Software agents can inform you whenever reality doesn’t match your expectations.")]),e._v(" "),a("p",[e._v("The use of agents also ensures that your entire system is self-healing. software agents act as the feedback and control loop for your operations.")]),e._v(" "),a("h2",{attrs:{id:"changes-are-made-via-pull-requests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changes-are-made-via-pull-requests"}},[e._v("#")]),e._v(" Changes are made via pull requests")]),e._v(" "),a("p",[e._v("With GitOps, troubleshooting becomes easier and faster, since we fix a production issue via a pull request rather than tinkering directly with a running system.\nIf we limit cluster access to a handful of privileged admins, we can apply the same Git workflow to both operations and development.")]),e._v(" "),a("p",[e._v("Changes to the application and cluster can then be contained to the following activities:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Updates to container images")])]),e._v(" "),a("li",[a("p",[e._v("Updates to the declarative specification, or in other words, the desired state")])]),e._v(" "),a("li",[a("p",[e._v("Errors in the environment, like container malfunctions")])])]),e._v(" "),a("h2",{attrs:{id:"convergence-ensures-eventual-consistency"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#convergence-ensures-eventual-consistency"}},[e._v("#")]),e._v(" Convergence ensures eventual consistency")]),e._v(" "),a("p",[e._v("If a group of configuration updates is made by a human, the observed state in the cluster can drift from the desired state declared in Git, thus causing divergence.\nWhen the desired and observed states are different, Kubernetes provides a convergence mechanism to drive the observed state towards what the teams declared as the desired state in version control. The Kubernetes orchestrator will apply changes to the cluster until its state has converged to the declared configuration.")]),e._v(" "),a("p",[e._v("After a configurable interval, an alert could be generated if the states are still divergent. As an implementation detail, a tool that can send alerts is "),a("em",[e._v("kubediff")]),e._v(".")]),e._v(" "),a("p",[e._v("Convergence is eventual and could be indicated by zero alerts. As a refresher, idempotence is the property of certain operations in mathematics and computer science whereby they can be applied multiple times without changing the result beyond the initial application. Convergence should be idempotent, as in, multiple applications of convergence should have the same outcome. To sum it up, think of convergence as a reconciliation loop that eventually brings the cluster to its desired state.")]),e._v(" "),a("p",[e._v("This model works for any Kubernetes resource and is extensible using "),a("em",[e._v("Kubernetes Custom Resource Definitions")]),e._v(" (CRDs).")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.weave.works/blog/what-is-gitops-really",target:"_blank",rel:"noopener noreferrer"}},[e._v("Weave Works Blog"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.cloudbees.com/gitops/what-is-gitops/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CloudBees"),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);