# Kubernetes Commands

## Start the pods

kubectl apply -f [name of the yml file]

## Accessing the services

minikube service [service name]

## Accessing the dashboard

Create service-account.yml
Create service-role.yml
Start the pods
run kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml
run kubectl proxy
run kubectl -n kubernetes-dashboard create token admin-user
