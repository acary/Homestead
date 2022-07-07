import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "../components/auth/auth-interceptor.service";
import { AuthGuard } from "../components/auth/auth.guard";
import { AuthService } from "../components/auth/auth.service";
import { IdeaService } from "../components/ideas/idea.service";
import { RecipeService } from "../components/recipes/recipe.service";
import { ShoppingListService } from "../components/shopping-list/shopping-list.service";
import { UsersService } from "../components/users/users.service";
import { CounterService } from "../services/counter.service";
import { LoggingInterceptorService } from "../services/logging-interceptor.service";

@NgModule({
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true },
        AuthGuard,
        AuthService,
        CounterService,
        IdeaService,
        RecipeService,
        ShoppingListService,
        UsersService
    ],
    declarations: [],
    imports: [],
    exports: []
})
export class CoreModule { }