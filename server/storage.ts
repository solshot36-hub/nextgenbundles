import {
  type User,
  type InsertUser,
  type Order,
  type InsertOrder,
} from "@shared/schema";
import { nanoid } from "nanoid";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Order methods
  createOrder(
    order: InsertOrder & { amount: number; reference: string },
  ): Promise<Order>;
  getOrder(id: string): Promise<Order | undefined>;
  updateOrderStatus(
    reference: string,
    status: Order["status"],
  ): Promise<Order | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private orders: Map<string, Order>;

  constructor() {
    this.users = new Map();
    this.orders = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = nanoid();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createOrder(
    insertOrder: InsertOrder & { amount: number; reference: string },
  ): Promise<Order> {
    const id = `${Date.now()}-${nanoid(10)}`;
    const order: Order = {
      ...insertOrder,
      id,
      status: "pending",
      reference: insertOrder.reference,
    };
    this.orders.set(id, order);
    return order;
  }

  async getOrder(id: string): Promise<Order | undefined> {
    return this.orders.get(id);
  }

  async updateOrderStatus(
    reference: string,
    status: Order["status"],
  ): Promise<Order | undefined> {
    const order = Array.from(this.orders.values()).find(
      (o) => o.reference === reference,
    );
    if (order) {
      order.status = status;
      this.orders.set(order.id, order);
    }
    return order;
  }
}

export const storage = new MemStorage();
