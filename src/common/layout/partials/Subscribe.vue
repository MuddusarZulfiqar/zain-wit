<template>
    <div>
        <form role="subscribe">
            <fieldset>
                <legend class="sr-only">&nbsp;</legend>
                <div class="form-group">
                    <input
                        type="text"
                        id="subscribe"
                        class="form-control"
                        name="Enter your Full Name"
                        aria-label=""
                        placeholder="Enter your Full Name"
                    />
                </div>
                <div class="form-group">
                    <input
                        type="email"
                        id="subscribe"
                        class="form-control"
                        name="Enter your Email"
                        aria-label=""
                        placeholder="Enter your Email"
                    />
                </div>
                <div class="form-group">
                    <div>
                        <b-dropdown
                            id="dropdown-form"
                            text="Select Subscription"
                            ref="dropdown"
                        >
                            <b-dropdown-form>
                                <fieldset>
                                    <legend class="visuallyhidden">
                                        Select Subscription
                                    </legend>
                                    <b-form-checkbox
                                        >Press Release</b-form-checkbox
                                    >
                                    <b-form-checkbox
                                        >Investor Relations
                                        News</b-form-checkbox
                                    >
                                </fieldset>
                            </b-dropdown-form>
                        </b-dropdown>
                    </div>
                </div>
                <div class="button-row">
                    <a
                        href="#"
                        class="btn btn-primary"
                        aria-describedby="subscribe"
                    >
                        let's start</a
                    >
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
export default {}
</script>

<style></style>
