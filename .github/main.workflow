workflow "Check website performance" {
  on = "deployment"
  resolves = ["Run Lighthouse"]
}

action "Run Lighthouse" {
  uses = "./lighthouse"

  secrets = ["GITHUB_TOKEN"]
}