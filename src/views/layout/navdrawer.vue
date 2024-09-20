<script setup>
import Menu from "@/components/Menu.vue";
</script>
<template>
    <div style="position: relative;height: 100vh;" class="offcanvas offcanvas-start show" data-bs-scroll="true"
        data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">

        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Agragoti Cooperative Socities</h5>
            <!-- <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> -->
        </div>

        <div class="offcanvas-body">
            <div class="accordion" id="accordionExample">

                <Menu name="dashboard" title="Dashboard" icon="bi bi-speedometer2">
                    <RouterLink to="sales-dashboard" class="list-group-item list-group-item-action"> Dashboard
                    </RouterLink>
                    <RouterLink to="account-dashboard" class="list-group-item list-group-item-action"> Account Dashboard
                    </RouterLink>
                </Menu>

                <!-- <Menu name="inventory" title="Inventory" icon="bi bi-box-seam-fill">
                    <RouterLink to="" class="list-group-item list-group-item-action" aria-current="true">Manage Category
                    </RouterLink>
                    <RouterLink to="" class="list-group-item list-group-item-action">Manage Product</RouterLink>
                    <RouterLink to="" class="list-group-item list-group-item-action">Manage UoM</RouterLink>
                    <RouterLink to="" class="list-group-item list-group-item-action">Manage Brand</RouterLink>
                </Menu> -->

                <Menu name="loanactive" title="Loanactive" icon="bi bi-box-seam-fill">
                    <RouterLink to="create-loanactive " class="list-group-item list-group-item-action"
                        aria-current="true">Create Loanactive
                    </RouterLink>
                    <!-- <RouterLink to="" class="list-group-item list-group-item-action">Manage Product</RouterLink>
                    <RouterLink to="" class="list-group-item list-group-item-action">Manage UoM</RouterLink>
                    <RouterLink to="" class="list-group-item list-group-item-action">Manage Brand</RouterLink> -->
                </Menu>



                <!-- <Menu name="purchase" title="Purchase" icon="bi bi-cash-coin">
                    <RouterLink to="" class="list-group-item list-group-item-action" aria-current="true">Manage Category
                    </RouterLink>
                    <RouterLink to="" class="list-group-item list-group-item-action">Manage Product</RouterLink>
                    <RouterLink to="" class="list-group-item list-group-item-action">Manage UoM</RouterLink>
                    <RouterLink to="" class="list-group-item list-group-item-action">Manage Brand</RouterLink>
                </Menu> -->
                <Menu name="loanapplicant" title="Loanapplicant" icon="bi bi-cash-coin">
                    <RouterLink to="create-loanapplicant" class="list-group-item list-group-item-action"
                        aria-current="true">Create Loanapplicant
                    </RouterLink>

                </Menu>




                <Menu name="deposit" title="Deposit" icon="bi bi-cash-coin">
                    <RouterLink to="create-deposit" class="list-group-item list-group-item-action" aria-current="true">
                        Create Deposit
                    </RouterLink>

                </Menu>


                <Menu name="system" title="System" icon="bi bi-gear-fill">
                </Menu>

                <Menu name="learning" title="Learning" icon="bi bi-book-half">
                    <!-- <RouterLink to="/options-api" class="list-group-item list-group-item-action">Options API
                    </RouterLink>
                    <RouterLink to="/composition-api" class="list-group-item list-group-item-action">Composition API
                    </RouterLink>
                    <RouterLink to="" class="list-group-item list-group-item-action">Event</RouterLink>
                    <RouterLink to="/web-api" class="list-group-item list-group-item-action">WebApi</RouterLink>
                    <RouterLink to="/products" class="list-group-item list-group-item-action">Products</RouterLink> -->
                    <RouterLink to="/loanactives" class="list-group-item list-group-item-action">Loanactives
                    </RouterLink>
                    <RouterLink to="/diposits" class="list-group-item list-group-item-action">Deposits</RouterLink>
                    <RouterLink to="/withdraws" class="list-group-item list-group-item-action">Withdraws</RouterLink>
                    <RouterLink to="/loanapplicants" class="list-group-item list-group-item-action">Loanapplicants
                    </RouterLink>
                    <RouterLink to="/members" class="list-group-item list-group-item-action">Members</RouterLink>
                </Menu>

            </div>
        </div>

    </div>

</template>