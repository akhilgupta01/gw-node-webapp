provider "azurerm" {
  subscription_id             = "23ed062a-b27b-48b4-81c7-2a6e36595b0d"
  client_id                   = "f6e7711c-e0f4-4469-a80b-e359e51e7196"
  client_certificate_path     = "C:/Users/akhil/secrets/azure-free-trial/service-principal.pfx"
  client_certificate_password = "abc#123"
  tenant_id                   = "62322924-fd01-4a0f-b083-219ca4292434"

}

resource "azurerm_resource_group" "my_resource_group" {
  name     = "test-group"
  location = "West europe"
}
