import db from '../../services/db';
import { Prisma } from '@prisma/client';

class EmailTemplatesController {
  public static async getAllByUserId(userId: number) {
    try {
      const templates = await db.user.findUnique({
        where: {
          id: userId,
        },
        include: {
          emailTemplates: true,
        },
      });
      return Promise.resolve(templates);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public static async create(
    userId: number,
    template: Prisma.EmailTemplateCreateInput
  ) {
    try {
      const newTemplate = await db.emailTemplate.create({
        data: {
          ...template,
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
      return Promise.resolve(newTemplate);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public static async update(
    templateId: number,
    template: Prisma.EmailTemplateUpdateInput
  ) {
    try {
      const updatedTemplate = await db.emailTemplate.update({
        where: {
          id: templateId,
        },
        data: template,
      });
      return Promise.resolve(updatedTemplate);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public static async delete(templateId: number) {
    try {
      const deletedTemplate = await db.emailTemplate.delete({
        where: {
          id: templateId,
        },
      });
      return Promise.resolve(deletedTemplate);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default EmailTemplatesController;
